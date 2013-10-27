from pattern.en import parse, Sentence, parse
from pattern.en import modality

def modality_score(sentence):
    s = parse(sentence, lemmata=True)
    s = Sentence(s)

    return modality(s)
