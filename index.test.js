const { DECIMAL } = require('sequelize');
const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')


describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    describe('create instances of each model', () => {
        test('can CREATE a Band instance', async () => {
            const testBand = await Band.create({ name: 'Cage the Elephant', genre: 'Alternative Rock' });
            expect(testBand.name).toBe('Cage the Elephant');
            expect(testBand.genre).toBe('Alternative Rock');
        });

        test('can CREATE a Musician instance.', async () => {
            const testMusician = await Musician.create(
                {
                    name: "Metro Boomin",
                    instrument: 'Software'
                }
            );
            expect(testMusician.name).toBe('Metro Boomin')
            expect(testMusician.instrument).toBe('Software')
        })

        test('can CREATE a Song instance.', async () => {
            const testSong = await Song.create(
                {
                    title: "Hummingbird",
                    year: 2022,
                    length: 312
                }
            );
            expect(testSong.title).toBe('Hummingbird')
            expect(testSong.year).toBe(2022)
            expect(testSong.length).toBe(312)
        })


    }) // TEST MODEL CREATIONS

    describe('update instance of each model', () => {

        test('create, find, UPDATE BAND instance', async () => {
            let createBandToUpdate = await Band.create({
                name: "Maye",
                genre: "testGenre"
            })

            let findBandToUpdate = await Band.findByPk(1);

            let testBandToUpdate = await findBandToUpdate.update({
                genre: "indie"
            })

            expect(testBandToUpdate.genre).toBe("indie")
        });

        test('create, find, UPDATE MUSICIAN instance', async () => {
            let createMusicianToDelete = await Song.create({
                name: "testMusician",
                instrument: "pickle"
            })

            let findMusicianToDelete = await Musician.findByPk(1);

            let testMusicianToDelete = await findMusicianToDelete.update({
                name: "Maye Osorio",
                instrument: "Microphone"
            })
            expect(testMusicianToDelete.name).toBe("Maye Osorio")
            expect(testMusicianToDelete.instrument).toBe("Microphone")
        })


        test('create, find, UPDATE SONG instance', async () => {
            let createSongToDelete = await Song.create({
                title: "testSong",
                year: 2010,
                length: 500
            });

            let findSongToDelete = await Song.findByPk(1);

            let testSongDelete = await findSongToDelete.update({
                title: "Come a little closer",
                year: 2013,
                length: 228
            })
            expect(testSongDelete.title).toBe('Come a little closer')
            expect(testSongDelete.year).toBe(2013)
            expect(testSongDelete.length).toBe(228)
        });
    })


    describe('delete instances of each model', () => {
        test('create, find, DELETE BAND instance', async () => {
            let createBandToUpdate = await Band.create({
                name: "testBand",
                genre: "testGenre"
            })

            let findBandToUpdate = await Band.findByPk(1);

            let testBandDeletion = await Band.destroy({
                where: {
                    name: "testBand"
                }
            });
        })

        test('create, find, DELETE MUSICIAN instance', async () => {
            let createMusicianToDelete = await Musician.create({
                name: "testMusician",
                instrument: "testInstrument"
            })
    
            let findMusicianToUpdate = await Musician.findByPk(1);
    
            let testMusicianToUpdate = await Musician.destroy({
                where: {
                    name: "testMusician"
                }
            })
        })

        test('create, find, DELETE SONG instance', async () => {
            let createSongToDelete = await Song.create(
                {
                    title: 'Come a little closer',
                    year: 2013,
                    length: 227
                }
            )

            let findSongToDelete = await Song.findByPk(1)

            let testSongToDelete = await findSongToDelete.destroy(
                {
                    where: {
                        title: 'Come a little closer'
                    }
                }
            )

        })


    }) // TEST MODEL REMOVAL




})