var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TypedFASTX","category":"page"},{"location":"#TypedFASTX","page":"Home","title":"TypedFASTX","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TypedFASTX.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TypedFASTX]","category":"page"},{"location":"#TypedFASTX.TypedRecord","page":"Home","title":"TypedFASTX.TypedRecord","text":"TypedRecord{T}\n\nA type to represent a generic biological sequence record. \n\nFields\n\nidentifier::String: The unique identifier for the sequence.\nsequence::T: The sequence itself. It can be of any type, including: String, LongDNA{4}, LongRNA{4} or LongAA.\nquality::Union{NoQuality, QualityScores}: The quality scores associated with the sequence. Nothing indicates absence of quality scores.\n\n\n\n\n\n","category":"type"},{"location":"#TypedFASTX.error_prob_generator-Tuple{TypedRecord}","page":"Home","title":"TypedFASTX.error_prob_generator","text":"error_prob_generator(record::TypedRecord)\n\nCreates a generator of error probabilities for each character in the sequence.\n\n\n\n\n\n","category":"method"},{"location":"#TypedFASTX.error_probs-Tuple{TypedRecord}","page":"Home","title":"TypedFASTX.error_probs","text":"error_probs(record::TypedRecord)\n\nCreates a vector of error probabilities for each character in the sequence.\n\n\n\n\n\n","category":"method"}]
}
