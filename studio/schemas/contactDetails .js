export default {
    title: "Personal Details",
    name: "personalDetails",
    type: "document",
    fields: [
    {
        title: "Firstname",
        name: "firstname",
        type: "string",
    },
    {
        title: "Lastname",
        name: "lastname",
        type: "string",
    },
    {
        title: "Nickname",
        name: "nickname",
        type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
        source: "nickname",
        maxLength: 96,
        },
    },
    {
            title: "Birth Day",
            name: "birthday",
            type: "number",
        },
        {
            title: "Birth Month",
            name: "birthmonth",
            type: "string",
            options: {
            list: [
                { title: "January", value: "January" },
                { title: "Febuary", value: "Febuary" },
                { title: "March", value: "March" },
                { title: "April", value: "April" },
                { title: "May", value: "May" },
                { title: "June", value: "June" },
                { title: "July", value: "July" },
                { title: "August", value: "August" },
                { title: "September", value: "September" },
                { title: "October", value: "October" },
                { title: "November", value: "November" },
                { title: "December", value: "December" },
            ], // <-- predefined values
            layout: "dropdown", // <-- defaults to 'dropdown'
            },
        },
    {
        title: "Phone Number",
        name: "phoneNumber",
        type: "string",
        options: {
        maxLength: 11,
        },
    },
    {
        title: "Profile image",
        name: "profileImage",
        type: "image",
        options: {
        hotspot: true,
        },
    },
    {
        title: "Short Bio",
        name: "excerpt",
        type: "string",
        options: {
        maxLength: 200,
        },
    },
    ],
    
}
export default {
    name: "categories",
    title: "Categories",
    type: "array",
    of: [{ type: "reference", to: { type: "category" } }],
}