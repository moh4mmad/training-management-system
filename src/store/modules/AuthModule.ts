import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  name: string;
  username: string;
  password: string;
  access_token: string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as User;
  isAuthenticated = !!JwtService.getToken();

  get currentUser(): User {
    return this.user;
  }

  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  get getErrors(): Array<string> {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isAuthenticated = true;
    this.user = user.info;
    this.errors = [];
    JwtService.saveToken(user.access_token);
    ApiService.setHeader();
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          if (data.access_token) {
            this.context.commit(Mutations.SET_AUTH, data);
            resolve();
          } else {
            this.context.commit(Mutations.SET_ERROR, data.message);
            reject();
          }
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data);
          reject();
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("forgot_password", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  // @Action
  // [Actions.VERIFY_AUTH]() {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.get("auth/verify")
  //       .then(({ data }) => {
  //         if (!data.status) {
  //           this.context.commit(Mutations.PURGE_AUTH);
  //         }
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //       });
  //   } else {
  //     this.context.commit(Mutations.PURGE_AUTH);
  //   }
  // }

  // @Action
  // [Actions.UPDATE_USER](payload) {
  //   ApiService.setHeader();
  //   return new Promise<void>((resolve, reject) => {
  //     ApiService.post("update_user", payload)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_USER, data);
  //         resolve();
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //         reject();
  //       });
  //   });
  // }
}
