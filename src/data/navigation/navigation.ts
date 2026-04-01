import type {NavRoute} from "@/types";

export const navigation: NavRoute[] = [
    {
        href: "/product",
        title: "Product",
        items: [
            {
                href: "/product/",
                title: "Headset",
            },
            {
                href: "/product/",
                title: "Wireless",
                isDisabled: true
            },
            {
                href: "/product/",
                title: "Software",
                isDisabled: true
            }
        ]
    },
    {
        href: "/app",
        title: "Application",
        items: [
            {
                href: "/app/live",
                title: "Live",
                isDisabled: true
            },
            {
                href: "/app/studio-recording",
                title: "StudioRecording",
                isDisabled: true
            },
            {
                href: "/app/meeting",
                title: "Meeting",
                isDisabled: true
            }
        ]
    },
    {
        href: "/story",
        title: "Story",
        items: [
            {
                href: "/story/customers",
                title: "Customers",
                isDisabled: true,
            },
            {
                href: "/story/pro-talks",
                title: "Pro Talks",
                isDisabled: true,
            }
        ]
    },
    {
        href: "/support",
        title: "Support",
        items: [
            {
                href: "/support/qna",
                title: "Qna",
                isDisabled: true
            }
        ]
    },
    {
        href: "/company",
        title: "Company"
    }
]
