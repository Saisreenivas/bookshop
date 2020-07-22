# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File / Folder | Purpose
---------|----------
`app/` | content for UI frontends go here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps...

- Open a new terminal and run  `cds watch`
- ( in VSCode simply choose _**Terminal** > Run Task > cds watch_ )
- Start adding content, e.g. a [db/schema.cds](db/schema.cds), ...


## Learn more...

Learn more at https://cap.cloud.sap/docs/get-started/


## Other Commands
- instant server restart like nodemon command.
>   `cds watch`
- Model Reuse: 
    For applications, it is recommended to use the common types and aspects provided through `@sap/cds/common`
- Common Aspects of Programming Model: `cuid`, `managed`, `temporal`.
- `cuid`: Both the following cases are same:
    - Case 1:
    Here, `cuid` is a convinient shortcut to add canonical, universally unique primary keys to your entity definitions. This is present in inbuilt cds library 
        using {cuid} from '@sap/cds/common';
        entity Books:cuid{
            title: String(111);
            author: String(111);
        }
    - Case 2:
    This is a hard coded way of providing a primary key. Case1 is always preferred.
        entity Books {
            key ID: UUID;
            title: String(111);
            author: String(111);
        }

- `managed`: Both the following cases are same:
    - Case 1:
    Here, `managed` is a convinient shortcut to add canonical, universally unique primary keys to your entity definitions. This is present in inbuilt cds library 
        using {managed} from '@sap/cds/common';
        entity Books:managed{
            title: String(111);
            author: String(111);
        }
    - Case 2:
    This is a hard coded way of providing a primary key. Case1 is always preferred.
        entity Books {
            modifiedAt: DateTime;
            createdAt: DateTime;
            createdBy: String;
            modifiedBy: String;
            title: String(111);
            author: String(111);
        }
        
- `temporal`: Both the following cases are same:
    - Case 1:
    Here, `temporal` is a convinient shortcut to add canonical, universally unique primary keys to your entity definitions. This is present in inbuilt cds library 
        using {temporal} from '@sap/cds/common';
        entity WorkAssignments:temporal{
            employee: String(111);
            descr: String(111);
        }
    - Case 2:
    This is a hard coded way of providing a primary key. Case1 is always preferred.
        entity WorkAssignments {
            validFrom: DateTime @cds.valid.from;
            validTo: DateTime @cds.valid.to;
            employee: String(111);
            descr: String(111);
        }

- Common Types of Programming Model: `Countries`, `Currencies`, `Languages`.
    - Syntax: 
        type Country : Association to sap.commons.Countries;
        use { Country } from '@sap/cds/common';
        entity Addresses{
            street: String;
            town: String;
            country: Country;   
        }

- Also, we have added a model products and declared a few entities there. So, to execute this project, please also place the project `products` in the same directory 

### All topics Covered.
- @sap/cds/common - predefined common:
    - Aspects
    - Types
- *using* directives
- Model resolution

custom Handlers and accessing database within custom handlers-------  need to be done.