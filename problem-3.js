function countHashtags(caption) {
    if(typeof caption !== "string"){
        return "Invalid"
    }
    
    const words = caption.split(" ")
    const hashtags = words.filter(word => word.startsWith("#"))

        let longestHashtags = "";
        for(let i = 0; i< hashtags.length; i++){
           
            const tag = hashtags[i].slice(1)
            if(tag.length > longestHashtags.length){
                longestHashtags = tag
            }
        }
        return { hashtagCount: hashtags.length, longestTag: longestHashtags }
}
const trendCaption = "Loving this weather today #sunny #vibes #weekend"
console.log(countHashtags(trendCaption));
