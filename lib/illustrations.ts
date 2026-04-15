export interface Illustration {
  name: string;
  path: string;
  category: string;
  tags: string[];
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
  viewBox: string;
  style?: Record<string, string>;
  animated?: boolean;
}

export const illustrations: Illustration[] = [
  {
    name: "Abstract Nodes",
    path: "/illustrations/abstract-nodes.svg",
    category: "abstract",
    tags: ["network", "nodes", "connections", "technology"],
    description: "An abstract illustration of connected nodes representing a network or system.",
    dimensions: {
      width: 800,
      height: 600
    },
    viewBox: "0 0 800 600",
    animated: true
  },
  {
    name: "Data Flow",
    path: "/illustrations/data-flow.svg",
    category: "abstract",
    tags: ["data", "flow", "stream", "digital"],
    description: "Visualization of data flowing through abstract channels.",
    dimensions: {
      width: 800,
      height: 600
    },
    viewBox: "0 0 800 600",
    animated: true
  },
  {
    name: "Circuit Board",
    path: "/illustrations/circuit-board.svg",
    category: "technology",
    tags: ["circuit", "electronics", "tech", "hardware"],
    description: "Abstract circuit board pattern representing technology infrastructure.",
    dimensions: {
      width: 800,
      height: 600
    },
    viewBox: "0 0 800 600",
    animated: false
  },
  {
    name: "Wave Pattern",
    path: "/illustrations/wave-pattern.svg",
    category: "abstract",
    tags: ["waves", "pattern", "flow", "oscillation"],
    description: "Dynamic wave pattern representing flow, change and transformation.",
    dimensions: {
      width: 800,
      height: 400
    },
    viewBox: "0 0 800 400",
    animated: true
  },
  {
    name: "Digital Transformation",
    path: "/illustrations/digital-transformation.svg",
    category: "business",
    tags: ["digital", "transformation", "business", "change"],
    description: "Illustration representing the concept of digital transformation in business.",
    dimensions: {
      width: 800,
      height: 600
    },
    viewBox: "0 0 800 600",
    animated: true
  }
];

/**
 * Gets an illustration by name
 * @param name The name of the illustration to retrieve
 * @returns The illustration or undefined if not found
 */
export function getIllustrationByName(name: string): Illustration | undefined {
  return illustrations.find(illustration => 
    illustration.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Searches illustrations by tag
 * @param tag The tag to search for
 * @returns Array of illustrations matching the tag
 */
export function getIllustrationsByTag(tag: string): Illustration[] {
  return illustrations.filter(illustration => 
    illustration.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

/**
 * Gets all illustrations in a specific category
 * @param category The category to filter by
 * @returns Array of illustrations in the specified category
 */
export function getIllustrationsByCategory(category: string): Illustration[] {
  return illustrations.filter(illustration => 
    illustration.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Gets all animated illustrations
 * @returns Array of animated illustrations
 */
export function getAnimatedIllustrations(): Illustration[] {
  return illustrations.filter(illustration => illustration.animated);
}

/**
 * Gets all static (non-animated) illustrations
 * @returns Array of static illustrations
 */
export function getStaticIllustrations(): Illustration[] {
  return illustrations.filter(illustration => !illustration.animated);
}