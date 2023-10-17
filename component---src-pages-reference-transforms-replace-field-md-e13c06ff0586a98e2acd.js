"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[2147],{62531:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return h}});var t,i=a(87462),o=a(63366),l=(a(15007),a(64983)),r=a(91515),d=["components"],p={},m=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),s={_frontmatter:p},u=r.Z;function h(e){var n=e.components,a=(0,o.Z)(e,d);return(0,l.mdx)(u,(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"replacefield-transform"},(0,l.mdx)("inlineCode",{parentName:"h1"},"replaceField")," transform"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"replaceField")," transform allows you to replace the configuration properties of a GraphQL field (source) with the ones of another field (target)."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"replace-field")," transforms allow you to replace the configuration properties of one field with another. This allows you to hoist field values from a subfield to its parent."),(0,l.mdx)("p",null,"Use this transform to clean up redundant queries or replace field types.\nIt can be customized to completely replace and/or compose resolve functions with a great degree of customization."),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Currently, this transform supports ",(0,l.mdx)("inlineCode",{parentName:"p"},"bare")," mode only. For information about ",(0,l.mdx)("inlineCode",{parentName:"p"},"bare")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"wrap")," modes, read the ",(0,l.mdx)("a",{parentName:"p",href:"index.md#two-different-modes"},"dedicated section"),"."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"The following example hoists the Adobe Commerce ",(0,l.mdx)("inlineCode",{parentName:"p"},"name")," field from the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ProductInterface")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"label")," field of ",(0,l.mdx)("inlineCode",{parentName:"p"},"ProductImage"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "AdobeCommerce",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        },\n        "transforms": [\n          {\n            "replaceField": {\n              "replacements": [\n                {\n                  "to": {\n                    "type": "ProductImage",\n                    "field": "label"\n                  },\n                  "from": {\n                    "type": "ProductInterface",\n                    "field": "name"\n                  },\n                  "scope": "hoistValue"\n                }\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,l.mdx)("h2",{id:"how-the-transform-works"},"How the transform works"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"from")," defines your source, the field in the schema you want to replace."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "from": {\n      "type": "Query",\n      "field": "books"\n    }\n  }\n]\n')),(0,l.mdx)("p",null,"In this case, we want to replace the field ",(0,l.mdx)("inlineCode",{parentName:"p"},"books")," in the type ",(0,l.mdx)("inlineCode",{parentName:"p"},"Query"),", which has the type ",(0,l.mdx)("inlineCode",{parentName:"p"},"BooksApiResponse"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"to")," defines the target, and which field should replace your identified source field."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "to": {\n    "type": "BooksApiResponse",\n    "field": "books"\n  }\n}\n')),(0,l.mdx)("p",null,"To summarize, with the configuration above, we want the field ",(0,l.mdx)("inlineCode",{parentName:"p"},"books")," in type ",(0,l.mdx)("inlineCode",{parentName:"p"},"Query")," to be replaced from being of type ",(0,l.mdx)("inlineCode",{parentName:"p"},"BooksApiResponse")," to become type ",(0,l.mdx)("inlineCode",{parentName:"p"},"[Book]"),"."),(0,l.mdx)("p",null,"Finally, since we no longer have any reference to ",(0,l.mdx)("inlineCode",{parentName:"p"},"BooksApiResponse")," this becomes a loose type, which means the transform will purge it from the GraphQL schema."),(0,l.mdx)("h2",{id:"transform-scopes"},"Transform scopes"),(0,l.mdx)("p",null,"We explored how to use the transform to replace field Types.\nThe transform always replaces the type of source field with the type of the target."),(0,l.mdx)("p",null,"However, the transform also allows you to pass a scope property, which values can be ",(0,l.mdx)("inlineCode",{parentName:"p"},"config")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"hoistValue"),"."),(0,l.mdx)("p",null,"We could say that the scope property could also take a ",(0,l.mdx)("inlineCode",{parentName:"p"},"type")," value, but since it's the minimum requirement to replace the Type, this is considered the default scope and so it wouldn't make sense to pass it when you desire just this behavior."),(0,l.mdx)("h3",{id:"scope-config"},(0,l.mdx)("inlineCode",{parentName:"h3"},"scope:")," config"),(0,l.mdx)("p",null,"The transform will replace the full field config when you pass ",(0,l.mdx)("inlineCode",{parentName:"p"},"scope: config{:yaml}"),"."),(0,l.mdx)("p",null,"A field config includes properties of the field such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"description"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"type"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"args"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"resolve"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"subscribe"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"deprecationReason"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"extensions"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"astNode"),"."),(0,l.mdx)("p",null,"As you can see, this is very comprehensive as it includes things like arguments and the resolve and subscribes functions."),(0,l.mdx)("p",null,"This can be useful when you have custom resolve functions on your target field. So you are happy to replace the source field entirely. However, you should be careful when you fully understand the implications of the behavior for your replaced field."),(0,l.mdx)("h3",{id:"scope-hoistvalue"},(0,l.mdx)("inlineCode",{parentName:"h3"},"scope: hoistValue")),(0,l.mdx)("p",null,"We have seen how ",(0,l.mdx)("inlineCode",{parentName:"p"},"hoistValue"),' can be useful in the full example described in the "How to use?" paragraph.'),(0,l.mdx)("p",null,"Once again, by default, the transform will replace the Type of the field only."),(0,l.mdx)("p",null,"When passing ",(0,l.mdx)("inlineCode",{parentName:"p"},"scope: hoistValue{:yaml}")," in addition to replacing the Type, the transform will wrap the resolve function of the original field (source) with an extra function. This function intercepts the return value of the resolver to ultimately return only the direct child property that has the same name as the target field; hence performing value hoisting."),(0,l.mdx)("p",null,"Taking into account the original schema shared above, originally, ",(0,l.mdx)("inlineCode",{parentName:"p"},"Query.books")," would return a value like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "books": {\n    "books": [\n      { "title": "abc", "author": "def" },\n      { "title": "ghi", "author": "lmn" }\n    ]\n  }\n}\n')),(0,l.mdx)("p",null,"But the wrapping function applied to the original resolver, when passing a ",(0,l.mdx)("inlineCode",{parentName:"p"},"hoistValue")," scope, will change the value above to this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "books": [\n    { "title": "abc", "author": "def" },\n    { "title": "ghi", "author": "lmn" }\n  ]\n}\n')),(0,l.mdx)("h2",{id:"additional-type-definitions"},"Additional type definitions"),(0,l.mdx)("p",null,"The examples shared so far are simple because we wanted to replace fields with other available fields in the original schema."),(0,l.mdx)("p",null,"However, sometimes you might want to replace a field Type with something that is not available in the original schema.\nIn this case, the transform allows you to pass additional type definitions that will be injected into your schema to use them as target field Types."),(0,l.mdx)("p",null,"Let's have a look at a Mesh config to be applied to the GraphQL schema shared above:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "transforms": [\n    {\n      "replaceField": {\n        "typeDefs": "type NewAuthor {\\n  age: String\\n}\\n",\n        "replacements": [\n          {\n            "from": {\n              "type": "Author",\n              "field": "age"\n            },\n            "to": {\n              "type": "NewAuthor",\n              "field": "age"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,l.mdx)("p",null,"The config above will change the type ",(0,l.mdx)("inlineCode",{parentName:"p"},"Author")," from this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-diff"},"type Author {\n  name: String!\n- age: Int!\n+ age: String\n}\n")),(0,l.mdx)("p",null,"To this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Author {\n  name: String!\n  age: String\n}\n")),(0,l.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"typeDefs")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Any"),") - Additional type definitions, used to replace field types"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"replacements")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Array of rules to replace fields",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"from")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Object"),", required):",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String"),", required)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String"),", required)"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"to")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Object"),", required):",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String"),", required)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String"),", required)"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"scope")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String (config | hoistValue)"),")"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"composer")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"name")," (type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"String"),")")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-transforms-replace-field-md-e13c06ff0586a98e2acd.js.map