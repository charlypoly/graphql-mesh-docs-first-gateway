import { createRouter, Response } from 'fets';
import { createServer } from 'node:http';

const router = createRouter({
    openAPI: {
        info: {
            title: 'Books service example',
            description: 'Everything about books',
            version: '1.0',
        },
        servers: [
            {
                url: 'http://localhost:3002',
            }
        ],
        components: {
            schemas: {
                Category: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                    },
                    required: ['id', 'name'],
                    additionalProperties: false,
                },
                Book: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        title: { type: 'string' },
                        authorId: { type: 'string' },
                        categoryId: { type: 'string' },
                    },
                    required: ['id', 'title', 'authorId', 'categoryId'],
                    additionalProperties: false,
                },
            }
        } as const
    },
})
    .route({
        method: 'GET',
        path: '/books',
        operationId: 'AppController_books',
        schemas: {
            responses: {
                200: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Book',
                    },
                },
            }
        } as const,
        handler: () => Response.json(books)
    })
    .route({
        method: 'GET',
        path: '/categories',
        operationId: 'AppController_categories',
        schemas: {
            responses: {
                200: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Category',
                    },
                },
            }
        } as const,
        handler: () => Response.json(categories)
    })
    .route({
        method: 'GET',
        path: '/books/:id',
        operationId: 'AppController_book',
        schemas: {
            request: {
                params: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                    },
                    required: ['id'],
                    additionalProperties: false,
                },
            },
            responses: {
                200: {
                    $ref: '#/components/schemas/Book',
                },
            }
        } as const,
        handler(req) {
            const book = books.find(book => book.id === req.params.id);
            if (!book) {
                return Response.json({
                    message: `Book with id ${req.params.id} not found`,
                }, {
                    status: 404,
                })
            }
            return Response.json(book);
        }
    });

createServer(router).listen(3002, () => {
    console.log('Books service is listening on http://localhost:3002');
});

const categories = [
    {
        id: '0',
        name: 'Fiction',
    },
    {
        id: '1',
        name: 'French',
    },
];

const books = [
    {
        id: '0',
        title: 'Illusion Perdues',
        authorId: '1',
        categoryId: '1',
    },
    {
        id: '1',
        title: 'Dune',
        authorId: '0',
        categoryId: '0',
    },
];