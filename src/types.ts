// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    key_benefits?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    service_category?: {
      key: string;
      value: string;
    };
    pricing_model?: string;
  };
}

// Case Study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    client_name: string;
    industry?: string;
    challenge: string;
    solution: string;
    results: string;
    cost_savings?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    related_services?: Service[];
  };
}

// Resource object type
export interface Resource extends CosmicObject {
  type: 'resources';
  metadata: {
    title: string;
    content: string;
    resource_type?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    download_file?: {
      url: string;
      imgix_url: string;
    };
    published_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isResource(obj: CosmicObject): obj is Resource {
  return obj.type === 'resources';
}