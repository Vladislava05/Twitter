new Vue({
    el: '#app',
    data(){
        return {
            
            tabs: [
                {icon: 'fas fa-home', title: 'Home', id:'home'},
                {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
                {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
                {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
                {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
                {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
                {icon: 'far fa-user', title: 'Profile', id: 'profile'},
                {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
              ],
              id: 'home',
              dropdown: false,
              trendings: [
                {top: 'Python Development', title: 'Django', bottom: 'Trending with Django'},
                {top: 'Frontend Development', title: 'React JS', bottom: '135K Tweets'},
                {top: 'Product Management', title: 'PM', bottom: '70K Tweets'},
                {top: 'Habr', title: 'Habr', bottom: '30K Tweets'},
                {top: 'Yandex', title: 'Yandex', bottom: '100K Tweets'}
              ],
              friends: [
                  {src: 'elon-musk.jpg', name: 'Elon Musk', handles: '@teslaBoy'},
                  {src: 'Danny Worsnop .jpg', name: 'Danny Worsnop', handles: '@DannyWorsnop'},
                  {src: 'man.jpg', name: 'John Elder', handles: '@johnElder'}
                  
              ],
              tweets: [
                  {src: 'elon-musk.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '30 min', body: 'Should I just quarantine on mars?', reetwets: '120K', likes: '12K', comments:'12K'},
                  {src: 'Danny Worsnop .jpg', name: 'Danny Worsnop', handle: '@DannyWorsnop', time: '10 min', body: 'The single is coming!', retweets: '34K', likes: '17K',comments:'789'},
                  {src: 'man.jpg', name: 'John Elder', handle: '@johnEldery', time: '45 min', body: 'We are looking for middle django developer', retweets: '7', likes: '6', comments:'9'},
              ],

              notes: [
                  {content: 'It is amazing'},
              ],
              note: {content: ''}
        }
    },
    methods:{
        addNewTweet(){
            let newTweet = {
                content: this.note.content
              };
            this.notes.push(newTweet)
        }
    }
})