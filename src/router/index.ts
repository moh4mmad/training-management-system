import store from "@/store";
//import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Mutations } from "@/store/enums/StoreEnums";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/sign-in",
    component: () => import("@/components/page-layouts/Auth.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("@/views/authentication/SignIn.vue"),
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () => import("@/views/authentication/PasswordReset.vue"),
      },
    ],
  },
  {
    path: "/association",
    component: () => import("@/layout/Association.vue"),
    children: [
      {
        path: "entity-list",
        name: "entity list",
        component: () => import("@/views/Association/EntityList.vue"),
      },
      {
        path: "entity-list/:id",
        name: "single entity",
        component: () => import("@/views/Association/SingleEntity.vue"),
      },
      {
        path: "entity-employee/:id",
        name: "entity employee",
        component: () => import("@/views/Association/EntityEmployee.vue"),
      },
      {
        path: "entityEmployeeProfiles/:entity/viewProfile/:id",
        name: "entityEmployeeProfiles",
        component: () =>
          import("@/views/Association/EntityEmployeeProfile.vue"),
      },
      {
        path: "new-entity",
        name: "new entity",
        component: () => import("@/views/Association/NewEntity.vue"),
      },
      {
        path: "association-contracts",
        name: "association contracts",
        component: () => import("@/views/Association/AssociationContracts.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Module1.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
    ],
  },
  //settings
  {
    path: "/settings",
    component: () => import("@/layout/Settings.vue"),
    children: [
      {
        path: "blood-groups",
        name: "blood groups",
        component: () =>
          import("@/views/configurations/settings/BloodGroups.vue"),
      },
      {
        path: "educational-qualifications",
        name: "Educational Qualifications",
        component: () =>
          import(
            "@/views/configurations/settings/EducationalQualifications.vue"
          ),
      },

      {
        path: "ethnic-groups",
        name: "Ethnic Groups",
        component: () =>
          import("@/views/configurations/settings/EthnicGroups.vue"),
      },
      {
        path: "holidays",
        name: "Holidays",
        component: () => import("@/views/configurations/settings/Holidays.vue"),
      },
      {
        path: "industry-sectors",
        name: "Industry Sectors",
        component: () =>
          import("@/views/configurations/settings/IndustrySectors.vue"),
      },
      {
        path: "industry-sub-sectors",
        name: "Industry Sub Sectors",
        component: () =>
          import("@/views/configurations/settings/IndustrySubSectors.vue"),
      },
      {
        path: "religions",
        name: "Religions",
        component: () =>
          import("@/views/configurations/settings/Religions.vue"),
      },
    ],
  },
  //entities
  {
    path: "/entities",
    component: () => import("@/layout/Entity.vue"),
    children: [
      {
        path: "entity-infos",
        name: "entity infos",
        component: () =>
          import("@/views/configurations/entities/EntityInfos.vue"),
      },
      {
        path: "entity-info-details",
        name: "entity info details",
        component: () =>
          import("@/views/configurations/entities/EntityInfoDetails.vue"),
      },
      {
        path: "entity-types",
        name: "entity types",
        component: () =>
          import("@/views/configurations/entities/EntityTypes.vue"),
      },
      {
        path: "entity-type-roles",
        name: "entity type roles",
        component: () =>
          import("@/views/configurations/entities/EntityTypeRoles.vue"),
      },
      {
        path: "entity-type-role-groups",
        name: "entity type role groups",
        component: () =>
          import("@/views/configurations/entities/EntityTypeRoleGroups.vue"),
      },
    ],
  },
  {
    path: "/components",
    component: () => import("@/layout/Components.vue"),
    children: [
      {
        path: "list-view",
        name: "list view",
        component: () => import("@/views/others/components/Listview.vue"),
      },
      {
        path: "buttons",
        name: "buttons",
        component: () => import("@/views/others/components/Buttons.vue"),
      },
      {
        path: "tree-view",
        name: "tree view",
        component: () => import("@/views/others/components/Treeview.vue"),
      },
      {
        path: "image-crop",
        name: "image crop",
        component: () => import("@/views/others/components/Imagecrop.vue"),
      },
      {
        path: "file-upload",
        name: "file upload",
        component: () => import("@/views/others/components/Fileupload.vue"),
      },
      {
        path: "drag",
        name: "drag & drop",
        component: () => import("@/views/others/components/Drag.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("@/views/others/components/Forms.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/Builder.vue"),
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () =>
              import("@/views/crafted/pages/profile/Campaigns.vue"),
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () =>
              import("@/views/crafted/pages/profile/Connections.vue"),
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () => import("@/views/crafted/pages/wizards/Horizontal.vue"),
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () => import("@/views/crafted/pages/wizards/Vertical.vue"),
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
          },
        ],
      },
      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () => import("@/views/apps/customers/GettingStarted.vue"),
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/CustomersListing.vue"),
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
      },
      {
        path: "/apps/calendar",
        name: "apps-calendar",
        component: () => import("@/views/apps/Calendar.vue"),
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/apps/chat/DrawerChat.vue"),
      },
      {
        path: "/crafted/modals/general/invite-friends",
        name: "modals-general-invite-friends",
        component: () =>
          import("@/views/crafted/modals/general/InviteFriends.vue"),
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () =>
          import("@/views/crafted/modals/general/UpgradePlan.vue"),
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () =>
          import("@/views/crafted/modals/general/ShareAndEarn.vue"),
      },
      {
        path: "/crafted/modals/forms/new-target",
        name: "modals-forms-new-target",
        component: () => import("@/views/crafted/modals/forms/NewTarget.vue"),
      },
      {
        path: "/crafted/modals/forms/new-card",
        name: "modals-forms-new-card",
        component: () => import("@/views/crafted/modals/forms/NewCard.vue"),
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () =>
          import("@/views/crafted/modals/forms/CreateApiKey.vue"),
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () =>
          import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () =>
          import("@/views/crafted/modals/wizards/CreateAccount.vue"),
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/crafted/widgets/Lists.vue"),
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/crafted/widgets/Statistics.vue"),
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/crafted/widgets/Charts.vue"),
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/crafted/widgets/Mixed.vue"),
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/crafted/widgets/Tables.vue"),
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/authentication/Error404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/authentication/Error500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  //store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
