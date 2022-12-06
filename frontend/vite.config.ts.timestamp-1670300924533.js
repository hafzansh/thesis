// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vite";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@lib": path.resolve("/home/hafzansh/Projects/nodejs/thesis/frontend", "./src/lib"),
      "@comp": path.resolve("/home/hafzansh/Projects/nodejs/thesis/frontend", "./src/lib/components"),
      "@utils": path.resolve("/home/hafzansh/Projects/nodejs/thesis/frontend", "./src/lib/utils")
    }
  },
  plugins: [sveltekit()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQGxpYic6IHBhdGgucmVzb2x2ZShcIi9ob21lL2hhZnphbnNoL1Byb2plY3RzL25vZGVqcy90aGVzaXMvZnJvbnRlbmRcIiwgJy4vc3JjL2xpYicpLFxuXHRcdFx0J0Bjb21wJzogcGF0aC5yZXNvbHZlKFwiL2hvbWUvaGFmemFuc2gvUHJvamVjdHMvbm9kZWpzL3RoZXNpcy9mcm9udGVuZFwiLCAnLi9zcmMvbGliL2NvbXBvbmVudHMnKSxcblx0XHRcdCdAdXRpbHMnOiBwYXRoLnJlc29sdmUoXCIvaG9tZS9oYWZ6YW5zaC9Qcm9qZWN0cy9ub2RlanMvdGhlc2lzL2Zyb250ZW5kXCIsICcuL3NyYy9saWIvdXRpbHMnKSxcblx0XHR9XG5cdH0sXG5cdHBsdWdpbnM6IFtzdmVsdGVraXQoKV0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxpQkFBaUI7QUFFMUIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFFBQVEsS0FBSyxRQUFRLGtEQUFrRCxXQUFXO0FBQUEsTUFDbEYsU0FBUyxLQUFLLFFBQVEsa0RBQWtELHNCQUFzQjtBQUFBLE1BQzlGLFVBQVUsS0FBSyxRQUFRLGtEQUFrRCxpQkFBaUI7QUFBQSxJQUMzRjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVMsQ0FBQyxVQUFVLENBQUM7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
