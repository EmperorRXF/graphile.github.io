webpackJsonp([0xc4997c0259bb],{404:function(e,t){e.exports={data:{remark:{html:'<h2 id="postgraphile-community-plugins"><a href="#postgraphile-community-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PostGraphile community plugins</h2>\n<p>Community members can write plugins for PostGraphile that extends its\nfunctionality; this page lists some of them. Issues with these plugins should\nbe directed to the plugin authors, not to this project. This page is maintained\nby the community and is not an endorsement by the project.</p>\n<p>If you have written a PostGraphile plugin (or have found one that is not listed\nhere), then please feel free to add it, you can <a href="https://github.com/graphile/graphile.github.io/edit/develop/src/pages/postgraphile/community-plugins.md">edit this page in GitHub</a>.</p>\n<p>See the <a href="https://www.graphile.org/postgraphile/usage-cli/">CLI</a> or\n<a href="https://www.graphile.org/postgraphile/usage-library/">library</a> docs for how to\nload plugins.</p>\n<p>Schema extension plugins for PostGraphile:</p>\n<ul>\n<li><a href="https://github.com/graphile-contrib/postgraphile-plugin-connection-filter">postgraphile-plugin-connection-filter</a> - adds a <code class="language-text">filter:</code> arg to connections that offers a more powerful alternative to the built in filtering operations</li>\n<li><a href="https://github.com/mlipscombe/postgraphile-plugin-nested-mutations">postgraphile-plugin-nested-mutatations</a> - enables a single mutation to create/update many related records</li>\n<li><a href="https://github.com/einarjegorov/graphile-upsert-plugin/blob/master/index.js">graphile-upsert-plugin</a> - adds upsert mutations</li>\n<li><a href="https://github.com/mattbretl/postgraphile-plugin-derived-field">postgraphile-plugin-derived-field</a> -  provides an interface for adding derived fields </li>\n<li><a href="https://github.com/mattbretl/postgraphile-plugin-upload-field">postgraphile-plugin-upload-field</a> -  enables file uploads (see <code class="language-text">postgraphile-upload-example</code> below)</li>\n<li><a href="https://github.com/stlbucket/event-phile">event-phile</a> - "capture designated function calls as re-playable events"</li>\n<li><a href="https://github.com/deden/postgraphile-plugin-connection-multi-tenant">postgraphile-plugin-connection-multi-tenant</a> - "Filtering Connections in PostGraphile by Tenants"</li>\n<li><a href="https://github.com/singingwolfboy/graphile-build-postgis">graphile-build-postgis</a> - PostGIS support (WIP)</li>\n</ul>\n<p>Examples of using these plugins:</p>\n<ul>\n<li><a href="https://github.com/mattbretl/postgraphile-upload-example">postgraphile-upload-example</a> - demonstrates how to add file upload support to PostGraphile using the GraphQL Multipart Request Spec.</li>\n</ul>\n<p>These extensions extend PostGraphile in different ways:</p>\n<ul>\n<li><a href="https://github.com/mshick/hapi-postgraphile">hapi-postgraphile</a> - add PostGraphile to your HAPI application</li>\n</ul>',frontmatter:{path:"/postgraphile/community-plugins/",title:"PostGraphile community plugins"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"},{id:"community",title:"Community"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"overview"},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community"},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community"},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-community-plugins-4103f0515d743af79948.js.map