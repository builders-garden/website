interface Address {
  city: string;
  state: string;
  country: string;
  country_code: string;
}

export interface NeynarUser {
  object: string;
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string | null;
  custody_address: string;
  profile: {
    bio: {
      text: string;
    };
    mentioned_profiles: [
      {
        object: string;
        fid: number;
        username: string;
        display_name: string;
        pfp_url: string;
        custody_address: string;
      }
    ];
    location?: {
      latitude: number;
      longitude: number;
      address: Address;
    };
  };
  follower_count: number;
  following_count: number;
  verifications: string[];
  verified_addresses: {
    eth_addresses: string[];
    sol_addresses: string[];
    primary: {
      eth_address: string;
      sol_address: string;
    };
  };
  verified_accounts: {
    platform: string;
    username: string;
  }[];
  power_badge: boolean;
  score: number;
}
