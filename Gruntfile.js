

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '',
                    open:true,
                    hostname: 'localhost',
                    keepalive:false
                }
            }
        },
        watch: {
            css: {
                files:['css/*.css']
            },
            html: {
                files:['*.html']
            },
            tasks: ['connect:server']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('server', ['connect:server','watch'] )
}