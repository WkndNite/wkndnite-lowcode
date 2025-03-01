import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/pages/IndexPage.vue';
import { useMaterialStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('@/pages/MaterialsMarket/IndexPage.vue'),
      redirect: '/select-group',
      children: [
        {
          path: '/select-group',
          name: 'select-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/SelectGroup.vue'),
          redirect: '/single-select',
          children: [
            {
              path: '/single-select',
              name: 'single-select',
              component: () => import('@/components/MaterialsMarket/Select/SingleSelect.vue'),
            },
            {
              path: '/multiple-select',
              name: 'multiple-select',
              component: () => import('@/components/MaterialsMarket/Select/MultipleSelect.vue'),
            },
            {
              path: '/single-picture-select',
              name: 'single-picture-select',
              component: () =>
                import('@/components/MaterialsMarket/Select/SinglePictureSelect.vue'),
            },
            {
              path: '/multiple-picture-select',
              name: 'multiple-picture-select',
              component: () =>
                import('@/components/MaterialsMarket/Select/MultiplePictureSelect.vue'),
            },
            {
              path: '/drop-down-select',
              name: 'drop-down-select',
              component: () => import('@/components/MaterialsMarket/Select/DropDownSelect.vue'),
            },
          ],
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/InputGroup.vue'),
          redirect: '/text-input',
          children: [
            {
              path: '/text-input',
              name: 'text-input',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
          ],
        },
        {
          path: '/advanced-group',
          name: 'advanced-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/AdvancedGroup.vue'),
          redirect: '/rate-evaluate',
          children: [
            {
              path: '/rate-evaluate',
              name: 'rate-evaluate',
              component: () => import('@/components/MaterialsMarket/Advanced/RateEvaluate.vue'),
            },
            {
              path: '/time-picker',
              name: 'time-picker',
              component: () => import('@/components/MaterialsMarket/Advanced/TimePicker.vue'),
            },
          ],
        },
        {
          path: '/remark-group',
          name: 'remark-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/RemarkGroup.vue'),
          redirect: '/remark-note',
          children: [
            {
              path: '/remark-note',
              name: 'remark-note',
              component: () => import('@/components/MaterialsMarket/Remarks/RemarkNote.vue'),
            },
          ],
        },
        {
          path: '/personal-group',
          name: 'personal-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/PersonalGroup.vue'),
          redirect: '/personal-name',
          children: [
            {
              path: '/personal-name',
              name: 'personal-name',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-identity',
              name: 'personal-identity',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-birthday',
              name: 'personal-birthday',
              component: () => import('@/components/MaterialsMarket/Advanced/TimePicker.vue'),
            },
            {
              path: '/personal-gender',
              name: 'personal-gender',
              component: () => import('@/components/MaterialsMarket/Select/SingleSelect.vue'),
            },
            {
              path: '/personal-age',
              name: 'personal-age',
              component: () => import('@/components/MaterialsMarket/Select/SingleSelect.vue'),
            },
            {
              path: '/personal-education',
              name: 'personal-education',
              component: () => import('@/components/MaterialsMarket/Select/SingleSelect.vue'),
            },
            {
              path: '/personal-college',
              name: 'personal-college',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-major',
              name: 'personal-major',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-industry',
              name: 'personal-industry',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-career',
              name: 'personal-career',
              component: () => import('@/components/MaterialsMarket/Select/SingleSelect.vue'),
            },
            {
              path: '/personal-company',
              name: 'personal-company',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-position',
              name: 'personal-position',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
          ],
        },
        {
          path: '/contact-group',
          name: 'contact-group',
          component: () => import('@/pages/MaterialsMarket/QuestionTypeGroup/ContactGroup.vue'),
          redirect: '/personal-telephone',
          children: [
            {
              path: '/personal-telephone',
              name: 'personal-telephone',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-email',
              name: 'personal-email',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-wechat',
              name: 'personal-wechat',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-qq',
              name: 'personal-qq',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
            {
              path: '/personal-address',
              name: 'personal-address',
              component: () => import('@/components/MaterialsMarket/Input/TextInput.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/editor/:id(\\d+)?',
      name: 'editor',
      component: () => import('@/pages/Editor/IndexPage.vue'),
      children: [
        {
          path: 'question-type',
          name: 'question-type',
          component: () => import('@/pages/Editor/LeftSide/QuestionTypePart.vue'),
        },
        {
          path: 'outline',
          name: 'outline',
          component: () => import('@/pages/Editor/LeftSide/OutlinePart.vue'),
        },
      ],
    },
    {
      path: '/preview/:id(\\d+)',
      name: 'preview',
      component: () => import('@/pages/Preview/IndexPage.vue'),
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('@/pages/Online/IndexPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 只针对组件市场页面路由切换组件状态
  const store = useMaterialStore();
  if (localStorage.getItem('activeView') === 'materials' && to.name) {
    store.setCurrentMaterialComponent(to.name as string);
  }
  next();
});

export default router;
