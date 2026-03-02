var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "Week 9 Quiz",
  "body": " Week 9 Quiz  Suppose that . Compute .  Note that this is the same as in   "
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
