new Vue({
    el: '#events',// 管理的 DOM 节点
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },
    // 页面加载时会调用这个函数，执行里面的方法
    ready: function() {
        this.fetchEvents();
    },

    // 这里写你想要注册的方法
    methods: {
        fetchEvents: function() {
            var events = [];

            // model 里的 $set 方法，
            this.$set('events', events);
            // 如果你想从后台接口 get 获取 json 数据，可以这么写
            // this.$http.get('api/events').success(function(events) {
            //   this.$set('events', events);
            // }).error(function(error) {
            //   console.log(error);
            // });
        },
        // 添加最后的保存事件
        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }

            // 如果你想 Post 提交到后台，你可以这么写
            // this.$http.post('api/events', this.event).success(function(response) {
            //   this.events.push(this.event);
            //   console.log("Event added!");
            // }).error(function(error) {
            //   console.log(error);
            // });
        },
        // 删除已经添加的列表
        deleteEvent: function(index) {
            if(confirm("确定要删除嘛？")) {
                // model 里的 $remove 方法,为啥不用 $delete ? 思考
                this.events.$remove(index);
            }

            // 如果你想从数据库里删除，可以这么写
            // this.$http.delete('api/events', index).success(function(response) {
            //   this.events.$remove(index);
            // }).error(function(error) {
            //   console.log(error);
            // });
        }
    }
});
