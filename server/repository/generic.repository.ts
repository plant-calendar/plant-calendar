export default class {
  private model;

  constructor(model) {
    // a sequelize model
    this.model = model;
  }

  public async findAll(params?: object) {
    // todo here is where the actual sequelize logic lives
    const filterBy = params || {};
    const ALL_PLANTS = [
      // todo use actual plants
      {
        id: 1,
        imageUrl: 'afasf',
        name: 'Asparagus',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId: 10,
      },
      {
        id: 2,
        imageUrl: 'afasf',
        name: 'Rose Bush',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId: 11,
      },
      {
        id: 3,
        imageUrl: 'afasf',
        name: 'Purple One',
        lastWatered: new Date(),
        waterInterval: 3,
        createdAt: 'afsrsf',
        updatedAt: 'fasfasf',
        habitatId: 12,
      },
    ];
    return ALL_PLANTS.filter(
      plant => Object.keys(filterBy).every(
        columnName => plant[columnName] === filterBy[columnName],
      ),
    );
  }
}