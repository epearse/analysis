var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "stumblebunny",
  "level": "1",
  "url": "#stumblebunny",
  "type": "Article",
  "number": "",
  "title": "Week 9 Qui<span class=\"process-math\">\\(\\scalebox{-1}[1]{z}\\)<\/span>",
  "body": " Week 9 Qui  Suppose that . Compute .  Note that this is the same as in   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
