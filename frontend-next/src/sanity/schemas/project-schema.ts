const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "overview",
            title:"Overview",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }
            ]
        },
        {
            name: "tags",
            title: "Tags",
            type: "url",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { 
                    type: "block",
                    lists: [
                        {title: 'Bullet', value: 'bullet'},
                        {title: 'Numbered', value: 'number'}
                      ],
                }
            ] // rich text
        },
    ],
}

export default project;