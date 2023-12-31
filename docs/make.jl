using Documenter, TypedFASTX

DocMeta.setdocmeta!(TypedFASTX, :DocTestSetup, :(using TypedFASTX); recursive=true)

makedocs(;
    modules = [TypedFASTX],
    format = Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
    ),
    sitename = "TypedFASTX.jl",
    doctest = false,
    pages=[
        "Overview" => "index.md",
        "API" => "api.md",
    ],
    authors = "Anton O. Sollman",
    checkdocs = :all
)

deploydocs(;
    repo = "github.com/anton083/TypedFASTX.jl",
    push_preview = true,
    branch = "gh-pages",
    devbranch = "dev",
    deps = nothing,
    make = nothing
)
