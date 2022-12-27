//批量删除微博
function deleteWeibo() {
  var items = document.querySelectorAll('.WB_feed_type')
  for (var i in items) {
    if (items[i].getAttribute) {
      var Data = new FormData()
      Data.append('mid', items[i].getAttribute('mid'))
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://weibo.com/aj/mblog/del?ajwvr=6', false)
      xhr.send(Data)
      console.log(xhr.responseText)
    }
  }
}
deleteWeibo()
// 批量取消点赞
function unlike() {
  var items = document.querySelectorAll('a[action-type=fl_like]')
  for (var i in items) {
    if (items[i].getAttribute) {
      var Data = new FormData()
      var keyvalue = items[i].getAttribute('action-data')
      Data.append('mid', keyvalue.substring(27, 43))
      Data.append('version', 'mini')
      Data.append('qid', 'heart')
      Data.append('like_src', 1)
      Data.append('cuslike', 1)
      Data.append('floating', 0)
      Data.append('_t', 0)
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://weibo.com/aj/v6/like/add?ajwvr=6', false)
      xhr.send(Data)
      console.log(xhr.responseText)
    }
  }
}
unlike()
