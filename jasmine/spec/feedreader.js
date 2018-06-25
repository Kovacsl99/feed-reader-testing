/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is the 2nd test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds URL should be defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };
        });

        /* This is the 3rd test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeeds name should be defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };
        });
    });


    /* This is the 2nd test suite named "The menu" */
    describe('The menu', function() {
     
        /* This is the 1st test that ensures the menu element is
         * hidden by default.
         */
        const menu = document.querySelector('body');
        const menuIcon = document.querySelector('.icon-list');

        it('should the menu hidden by default', function() {
            expect(menu.className).toBe('menu-hidden');
        });

         /* This is the 2nd test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle the menu visibility when clicked', function() {
            menuIcon.click();
            expect(menu.className).toBe('');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
 

    /* This is the 3rd test suite named "Initial Entries" */
    describe('Initial entries', function() {

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
                
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should be at least 1 entry', function(done) {
            const entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
        });
    });

    /* This is the 4th test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        
        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        const feed = document.querySelector('.feed');
        let before,
            after;

        beforeEach(function(done) {
            
            loadFeed(0, function() {
                before = feed.innerHTML;
                
                loadFeed(1, function() {
                    after = feed.innerHTML;
                done();
                });
            });
        });

        it('should change the content when a new feed is loading', function(done) {
            expect(before).not.toBe(after);
            done();
        });
    });
        
}());
