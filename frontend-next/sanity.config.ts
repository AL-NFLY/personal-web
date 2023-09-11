import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
giimport schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "giahi441",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-11-09",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config