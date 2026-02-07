def detect_review_noise(reviews):
    flags = []
    short = [r for r in reviews if len(r.get("text","")) < 30]
    if len(short) / max(len(reviews),1) > 0.4:
        flags.append("high_short_review_ratio")
    return {"noise": len(flags), "flags": flags}
