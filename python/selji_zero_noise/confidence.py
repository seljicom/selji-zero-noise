def confidence_score(reviews):
    if not reviews:
        return 0
    ratings = [r.get("rating") for r in reviews if isinstance(r.get("rating"), (int, float))]
    if not ratings:
        return 0
    avg = sum(ratings) / len(ratings)
    return round(avg * min(len(ratings)/100, 1), 2)
