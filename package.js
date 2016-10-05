Package.describe({
    name: "telescope:theme-hd",
    summary: "Telescope Hacking Days theme package",
    version: "0.0.1",
    git: "https://github.com/hackingdays/telescope-theme-hd.git"
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@1.0");

    api.use(['telescope:core@0.25.7']);

    api.addFiles([
        'lib/hd.js',
    ], ['client', 'server']);

    api.addFiles(
        [
            // modules
            'lib/client/scss/modules/_accounts.scss',
            'lib/client/scss/modules/_comments.scss',
            'lib/client/scss/modules/_dialogs.scss',
            'lib/client/scss/modules/_nav.scss',
            'lib/client/scss/modules/_posts.scss',
            'lib/client/scss/modules/_user-profile.scss',
            'lib/client/scss/modules/_banners.scss',

            // partials
            'lib/client/scss/partials/_colors.scss',
            'lib/client/scss/partials/_grid.scss',
            'lib/client/scss/partials/_mixins.scss',
            'lib/client/scss/partials/_tooltips.scss',
            'lib/client/scss/partials/_typography.scss',

            // screen
            'lib/client/scss/screen.scss'
        ],
        'client'
    );

});
