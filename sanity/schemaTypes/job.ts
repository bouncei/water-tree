// job.schema.js

import { title } from "process";


export default {
    name: 'job',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Job Title',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of your job posting"
        },
        {
            name: 'description',
            type: 'text',
            title: 'Job Description',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'company',
            title: 'Company',
            type: 'reference',
            to: { type: "company" },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'jobType',
            type: 'string',
            title: 'Job Type',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Internship', value: 'Internship' },
                    { title: "Contract", value: "Contract" }
                ],
            },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },

        {
            name: 'postedDate',
            type: 'datetime',
            title: 'Posted Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            validation: (Rule: { required: () => any; }) => Rule.required().min(1),
        },
        {
            name: 'deadline',
            type: 'datetime',
            title: 'Deadline',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
    ],
};