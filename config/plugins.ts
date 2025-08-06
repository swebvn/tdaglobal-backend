// config/plugins.ts  hoặc config/plugins.js
export default () => ({
  'populate-all': {
    enabled: true,
    config: {
      // 1 trong 3 cách sau:

      // C1: Populate tất cả quan hệ đệ quy
      relations: true,

      // C2: Không populate quan hệ nào
      // relations: false,

      // C3: Chỉ populate một số model nhất định
      // relations: ['api::article.article', 'api::category.category'],
    },
  },
});
