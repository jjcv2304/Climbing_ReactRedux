class ClimbingLocation {
  constructor(id, name, description) {
    //
  }
}

class Grade {
  constructor(id, name) {
    //
  }
}

class RouteType {
  constructor(id, name) {
    //
  }
}

class Route {
  constructor(id, leftovers, number2, grade, number3, routeType, location) {
    //
  }
}

function BackendInterceptor() {
  let locations = [
    new ClimbingLocation(1, "Lighthouse Park", "p124"),
    new ClimbingLocation(2, "Sully´s Hangout", "p210"),
    new ClimbingLocation(3, "The Lynn Boulders", "p220"),
    new ClimbingLocation(4, "Greenwood PArk", "p239"),
  ];

  let grades = [
    new Grade(1, "4b|5.6"),
    new Grade(2, "4c|5.7"),
    new Grade(3, "5a|5.8"),
    new Grade(4, "5b|5.9"),
    new Grade(5, "5c|5.10a"),
    new Grade(6, "6a|5.10b"),
    new Grade(7, "6a+|5.10c"),
    new Grade(8, "6b|5.10d"),
    new Grade(9, "6b+|5.11a"),
    new Grade(10, "6c|5.11b"),
    new Grade(11, "6c+|5.11c"),
    new Grade(12, "7a|5.11d"),
    new Grade(13, "7a+|5.12a"),

    new Grade(99, "0a|Undefined"),
  ];

  let routeTypes = [
    new RouteType(1, "Top rope"),
    new RouteType(2, "Lead Climbing"),
    new RouteType(3, "Traditional"),
  ];
  // black Top rope
  // blue Sport Climbing
  // red Gear Route
  // green Boulder

  let routes = [
    new Route(
      1,
      "Leftovers",
      5,
      this.grades[2],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      2,
      "Your Other Left",
      7,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      3,
      "Lefty",
      5,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      4,
      "A Bunch of BS",
      4,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      5,
      "The Rookie",
      6,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      6,
      "The Beginner",
      6,
      this.grades[0],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      7,
      "Beginner’s Luck",
      6,
      this.grades[1],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      8,
      "Little Lulu",
      9,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      9,
      "3M",
      9,
      this.grades[3],
      -1,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      10,
      "Lubo",
      7,
      this.grades[8],
      18,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      11,
      "Constant Gardener",
      6,
      this.grades[9],
      14,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      12,
      "Open Project",
      6,
      this.grades[13],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      13,
      "Closed Project",
      7,
      this.grades[13],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      14,
      "Speed Dial #8",
      5,
      this.grades[7],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      15,
      "Shake Your Lettuce",
      7,
      this.grades[6],
      16,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      16,
      "Serene",
      10,
      this.grades[11],
      25,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      17,
      "Special K",
      7,
      this.grades[10],
      18,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      18,
      "Hindu Variation",
      7,
      this.grades[11],
      18,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      19,
      "Hindu Two Routes",
      7,
      this.grades[9],
      18,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      20,
      "My One Muscle",
      7,
      this.grades[8],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      21,
      "Get Bent!",
      7,
      this.grades[9],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      22,
      "Wingman",
      7,
      this.grades[9],
      18,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      23,
      "Back Door Party",
      7,
      this.grades[12],
      16,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      24,
      "Moss Pit",
      4,
      this.grades[3],
      8,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      25,
      "Dynamic Duo",
      8,
      this.grades[5],
      19,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      26,
      "French Connection",
      8,
      this.grades[7],
      19,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      27,
      "Trekking to India",
      9,
      this.grades[10],
      20,
      this.routeTypes[1],
      this.locations[1]
    ),
    new Route(
      28,
      "In the Bubble",
      6,
      this.grades[12],
      15,
      this.routeTypes[1],
      this.locations[1]
    ),
  ];

  function filtering() {
    // let filteredRoutes = this.routes.slice(0);
    // let index = 0;
    // const params = request.params.keys();
    //
    // request.params.keys().forEach(k => {
    //   if (k === 'location') {
    //     // @ts-ignore
    //     const location: ClimbingLocation = request.params.getAll(params[index])[0];
    //     filteredRoutes = filteredRoutes.filter(r => r.location.id === location.id);
    //   }
    //   if (k === 'routeType') {
    //     // @ts-ignore
    //     const type: RouteType = request.params.getAll(params[index])[0];
    //     filteredRoutes = filteredRoutes.filter(r => r.type.id === type.id);
    //   }
    //   if (k === 'lowerGrade') {
    //     // @ts-ignore
    //     const grade: Grade = request.params.getAll(params[index])[0];
    //     filteredRoutes = filteredRoutes.filter(r => r.grade.id >= grade.id);
    //   }
    //   if (k === 'higherGrade') {
    //     // @ts-ignore
    //     const grade: Grade = request.params.getAll(params[index])[0];
    //     filteredRoutes = filteredRoutes.filter(r => r.grade.id <= grade.id);
    //   }
    //
    //   index++;
    // });
    //
    // return filteredRoutes;
  }
}
