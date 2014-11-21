   (function() {
       var showsService = function() {
        
        var shows = [
            {
                id:1,
                name:'Person Of Interest',
                created: '2013',
                mediasource:'CBS', 
                numberofviewers: 5000000,
                actors: [
                    {
                        id: 2,
                        character: 'Harold',
                        actor: 'Michael Emerson'
                    },
                    {
                        id: 3,
                        character: 'Reese',
                        actor: 'Jim Caviezel'
                    }
                ]
            },
            {
                id:2,
                name:'The Blacklist',
                created: '2013',
                mediasource:'ABC', 
                numberofviewers: 6000000,
                actors: [
                    {
                        id: 2,
                        character: 'Red',
                        actor: 'James Spader'
                    },
                    {
                        id: 3,
                        character: 'Keene',
                        actor: 'Megan Boone'
                    }
                ]
            }, 
            {
                id:3,
                name:'Madam Secretary',
                created: '2014', 
                mediasource:'CBS', 
                numberofviewers: 1000000,
                actors: [
                    {
                        id: 2,
                        character: 'Elizabeth',
                        actor: 'Tea Leone'
                    },
                    {
                        id: 3,
                        character: 'Henry',
                        actor: 'Tim Daly'
                    }
                ]
            }, 
            {
                id:4,
                name:'Scorpion',
                created: '2014',
                mediasource:'NBC', 
                numberofviewers: 1000000,
                actors: [
                    {
                        id: 2,
                        character: 'Walter',
                        actor: 'Elyes Gabel'
                    },
                    {
                        id: 3,
                        character: 'Happy',
                        actor: 'Jadyn Wong'
                    }
                ]
            }
        ];
 
    this.getShows = function() {
            return shows;
        };
        
    this.getShow = function(showId) {
        for (var i=0,len=shows.length;i<len;i++) {
           if (shows[i].id === parseInt(showId)) {
               return shows[i];
           }
        }
        return {};
        };
    };
     angular.module('showsApp')
      .service('showsService', showsService);
}());