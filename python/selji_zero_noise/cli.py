import sys, json
from selji_zero_noise import confidence_score, detect_review_noise, build_amazon_query

def main():
    args = sys.argv[1:]
    if not args:
        print("SELJI Zero-Noise CLI")
        return
    if args[0] == "score":
        print(confidence_score(json.loads(args[1])))
    elif args[0] == "noise":
        print(detect_review_noise(json.loads(args[1])))
    elif args[0] == "query":
        print(build_amazon_query(args[1:]))
