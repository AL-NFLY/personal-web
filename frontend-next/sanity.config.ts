import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "giahi441",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-11-09",
    basePath: "/admin",
    plugins: [deskTool],
})

export default config