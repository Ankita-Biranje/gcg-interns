interface Student {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  readonly id: number; // Readonly property
  address: {
    street: string,
    town: string,
    pincode: number,
    available?: boolean
  }
}

let Manali: Student = {
  firstName: "Manali",
  lastName: "Chirmure",
  id: 24,
  address: {
    street: "Main St.",
    town: "Gadhinglaj",
    pincode: 416502,
    available: true
  }
}

// Manali.id = 26;