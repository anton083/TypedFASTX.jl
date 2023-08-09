var documenterSearchIndex = {"docs":
[{"location":"","page":"Overview","title":"Overview","text":"CurrentModule = TypedFASTX\nDocTestSetup = quote\n    using TypedFASTX, FASTX, BioSequences\nend","category":"page"},{"location":"#TypedFASTX","page":"Overview","title":"TypedFASTX","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"(Image: Latest Release) (Image: MIT license) (Image: Documentation) (Image: Status) (Image: Coverage)","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"FASTX records with typed sequences and optional qualities.","category":"page"},{"location":"#Installation","page":"Overview","title":"Installation","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"You can install TypedFASTX from the Julia REPL. Type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"(@v1.9) pkg> add TypedFASTX","category":"page"},{"location":"#Quickstart","page":"Overview","title":"Quickstart","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Like FASTX.jl, TypedFASTX.jl is used for handling FASTA and FASTQ files. The main difference is that the sequence field is typed (it is not just a raw array of ASCII bytes). Records can be created using the TypedFASTA and TypedFASTQ modules.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"Construct a FASTA record:","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"julia> record = DNARecord(\"ricky the record\", \"GATTACA\");\n\njulia> sequence(record)\n7nt DNA Sequence:\nGATTACA\n\njulia> (identifier(record), description(record), sequence(record))\n(\"ricky\", \"ricky the record\", GATTACA)","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"Modules = [TypedFASTX]","category":"page"},{"location":"#TypedFASTX.AAReader","page":"Overview","title":"TypedFASTX.AAReader","text":"AAReader\n\nAlias for AbstractReader{LongAA}. Can be used for constructing TypedFASTAReader{LongAA} and TypedFASTQReader{LongAA} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AARecord","page":"Overview","title":"TypedFASTX.AARecord","text":"AARecord\n\nAlias for AbstractRecord{LongAA}. Can be used for constructing TypedFASTA.Record{LongAA} and TypedFASTQ.Record{LongAA} instances. \n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AAWriter","page":"Overview","title":"TypedFASTX.AAWriter","text":"AAWriter\n\nAlias for AbstractWriter{LongAA}. Can be used for constructing TypedFASTAWriter{LongAA} and TypedFASTQWriter{LongAA} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AbstractReader","page":"Overview","title":"TypedFASTX.AbstractReader","text":"AbstractReader{T}\n\nAbstract type for typed FASTX readers. T is the type of the sequence in the records.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AbstractReader-Union{Tuple{String}, Tuple{T}} where T","page":"Overview","title":"TypedFASTX.AbstractReader","text":"Constructor for AbstractReader{T} that looks at the file extension of the given path.\n\n\n\n\n\n","category":"method"},{"location":"#TypedFASTX.AbstractRecord","page":"Overview","title":"TypedFASTX.AbstractRecord","text":"AbstractRecord{T}\n\nAbstract type for typed FASTX records.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AbstractWriter","page":"Overview","title":"TypedFASTX.AbstractWriter","text":"AbstractWriter{T}\n\nAbstract type for typed FASTX writers. T is the type of the sequence in the records.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.AbstractWriter-Union{Tuple{String}, Tuple{T}} where T","page":"Overview","title":"TypedFASTX.AbstractWriter","text":"Constructor for AbstractWriter{T} that looks at the file extension of the given path.\n\n\n\n\n\n","category":"method"},{"location":"#TypedFASTX.DNAReader","page":"Overview","title":"TypedFASTX.DNAReader","text":"DNAReader\n\nAlias for AbstractReader{LongDNA{4}}. Can be used for constructing TypedFASTAReader{LongDNA{4}} and TypedFASTQReader{LongDNA{4}} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.DNARecord","page":"Overview","title":"TypedFASTX.DNARecord","text":"DNARecord\n\nAlias for AbstractRecord{LongDNA{4}}. Can be used for constructing TypedFASTA.Record{LongDNA{4}} and TypedFASTQ.Record{LongDNA{4}} instances. \n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.DNAWriter","page":"Overview","title":"TypedFASTX.DNAWriter","text":"DNAWriter\n\nAlias for AbstractWriter{LongDNA{4}}. Can be used for constructing TypedFASTAWriter{LongDNA{4}} and TypedFASTQWriter{LongDNA{4}} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.QualityScores","page":"Overview","title":"TypedFASTX.QualityScores","text":"QualityScores\n\nA type for storing FASTQ quality with different encodings.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.RNAReader","page":"Overview","title":"TypedFASTX.RNAReader","text":"RNAReader\n\nAlias for AbstractReader{LongRNA{4}}. Can be used for constructing TypedFASTAReader{LongRNA{4}} and TypedFASTQReader{LongRNA{4}} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.RNARecord","page":"Overview","title":"TypedFASTX.RNARecord","text":"RNARecord\n\nAlias for AbstractRecord{LongRNA{4}}. Can be used for constructing TypedFASTA.Record{LongRNA{4}} and TypedFASTQ.Record{LongRNA{4}} instances. \n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.RNAWriter","page":"Overview","title":"TypedFASTX.RNAWriter","text":"RNAWriter\n\nAlias for AbstractWriter{LongRNA{4}}. Can be used for constructing TypedFASTAWriter{LongRNA{4}} and TypedFASTQWriter{LongRNA{4}} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.StringReader","page":"Overview","title":"TypedFASTX.StringReader","text":"StringReader\n\nAlias for AbstractReader{String}. Can be used for constructing TypedFASTAReader{String} and TypedFASTQReader{String} instances.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.StringRecord","page":"Overview","title":"TypedFASTX.StringRecord","text":"StringRecord\n\nAlias for AbstractRecord{String}. Can be used for constructing TypedFASTA.Record{String} and TypedFASTQ.Record{String} instances. \n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.StringWriter","page":"Overview","title":"TypedFASTX.StringWriter","text":"StringWriter\n\nAlias for AbstractWriter{String}. Can be used for constructing TypedFASTAWriter{String} and TypedFASTQWriter{String} instances.\n\n\n\n\n\n","category":"type"},{"location":"#FASTX.description-Tuple{AbstractRecord}","page":"Overview","title":"FASTX.description","text":"description(record::AbstractRecord)::String\n\nGet the entire description of record. Returns a String.\n\n\n\n\n\n","category":"method"},{"location":"#FASTX.identifier-Tuple{AbstractRecord}","page":"Overview","title":"FASTX.identifier","text":"identifier(record::AbstractRecord)::SubString{String}\n\nGet the identifier of record. The identifier is the first \"word\" of the description. Returns a SubString{String}.\n\n\n\n\n\n","category":"method"},{"location":"#FASTX.sequence-Union{Tuple{AbstractRecord{T}}, Tuple{T}} where T","page":"Overview","title":"FASTX.sequence","text":"sequence(record::AbstractRecord{T})::T\n\nReturns the sequence of record.\n\n\n\n\n\n","category":"method"},{"location":"#FASTX.sequence-Union{Tuple{T}, Tuple{Type{T}, AbstractRecord}} where T","page":"Overview","title":"FASTX.sequence","text":"sequence(T, record::AbstractRecord)::T\n\nReturns the sequence of record, converted to type T.\n\n\n\n\n\n","category":"method"}]
}