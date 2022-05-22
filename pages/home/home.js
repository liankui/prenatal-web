const app = getApp();

// Page({
//     now: app.globalData.now,
//     // data: {
//     //     name: '张三'
//     // },
//     buttonHandler(event) {
//         this.setData({
//             name: '李四'
//         }, function () {
//             wx.showToast({
//                 title: '操作完成',
//                 duration: 700
//             });
//         })
//     },
//
//     data: {
//         items: ['事项 A', '事项 B', '事项 C']
//     }
// });

// Page({
//     data: {
//         items: [],
//         inputValue: ''
//     },
//     inputHandler(event) {
//         this.setData({
//             inputValue: event.detail.value || ''
//         });
//     },
//     buttonHandler(event) {
//         const newItem = this.data.inputValue.trim();
//         if (!newItem) return;
//         const itemArr = [...this.data.items, newItem];
//         wx.setStorageSync('items', itemArr);
//         this.setData({ items: itemArr });
//     },
//     onLoad() {
//         const itemArr = wx.getStorageSync('items') || [];
//         this.setData({ items: itemArr });
//     }
// });


// Page({
//     data: { items: [] },
//     onLoad() {
//         const that = this;
//         wx.request({
//             url: 'http://localhost:3000/items',
//             success(res) {
//                 that.setData({ items: res.data });
//             }
//         });
//     },
// });

// Page({
//     data: { name: '' },
//     buttonHandler(event) {
//         if (!event.detail.userInfo) return;
//         this.setData({
//             name: event.detail.userInfo.nickName
//         });
//     }
// });

Page({
    buttonHandler(event) {
        wx.navigateTo({
            url: '../second/second'
        });
    }
});
