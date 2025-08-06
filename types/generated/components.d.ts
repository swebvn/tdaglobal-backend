import type { Schema, Struct } from '@strapi/strapi';

export interface JobBenefits extends Struct.ComponentSchema {
  collectionName: 'components_job_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'gift';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface JobContactHr extends Struct.ComponentSchema {
  collectionName: 'components_job_contact_hrs';
  info: {
    displayName: 'Contact HR';
    icon: 'globe';
  };
  attributes: {
    contactEmail: Schema.Attribute.Email;
    contactName: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
  };
}

export interface JobJobDetails extends Struct.ComponentSchema {
  collectionName: 'components_job_job_details';
  info: {
    displayName: 'Job Details';
    icon: 'folder';
  };
  attributes: {
    employmentType: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    salary: Schema.Attribute.String;
    valid_through: Schema.Attribute.Date;
  };
}

export interface JobKeyResponsibilities extends Struct.ComponentSchema {
  collectionName: 'components_job_key_responsibilities';
  info: {
    displayName: 'KeyResponsibilities';
    icon: 'check';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface JobRequirements extends Struct.ComponentSchema {
  collectionName: 'components_job_requirements';
  info: {
    displayName: 'Requirements';
    icon: 'star';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface JobWorkingInformation extends Struct.ComponentSchema {
  collectionName: 'components_job_working_informations';
  info: {
    displayName: 'Working Information';
    icon: 'clock';
  };
  attributes: {
    officeLocation: Schema.Attribute.Text;
    workingHours: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'job.benefits': JobBenefits;
      'job.contact-hr': JobContactHr;
      'job.job-details': JobJobDetails;
      'job.key-responsibilities': JobKeyResponsibilities;
      'job.requirements': JobRequirements;
      'job.working-information': JobWorkingInformation;
    }
  }
}
