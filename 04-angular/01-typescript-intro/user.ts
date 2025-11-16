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

// Ankira.id = 26;