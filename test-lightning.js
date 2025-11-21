try {
    console.log('Trying to require lightningcss-darwin-arm64...');
    require('lightningcss-darwin-arm64');
    console.log('Success!');
} catch (e) {
    console.error('Failed:', e);
}
