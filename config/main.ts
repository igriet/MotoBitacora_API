const config={
    port:process.env.PORT || 3000,
    db: 'mongodb://localhost/bitacoradb',
    test_env:"test",
    test_db: 'mongodb://localhost/bitacoradb',
    test_port:3001
}

export default config;