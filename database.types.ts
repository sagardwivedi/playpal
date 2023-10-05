export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string;
          booking_end_time: string;
          booking_id: number;
          booking_start_time: string;
          total_price: number;
          turf_id: number;
          user_id: string;
        };
        Insert: {
          booking_date: string;
          booking_end_time: string;
          booking_id?: number;
          booking_start_time: string;
          total_price: number;
          turf_id: number;
          user_id: string;
        };
        Update: {
          booking_date?: string;
          booking_end_time?: string;
          booking_id?: number;
          booking_start_time?: string;
          total_price?: number;
          turf_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_turf_id_fkey";
            columns: ["turf_id"];
            referencedRelation: "turfs";
            referencedColumns: ["turf_id"];
          },
          {
            foreignKeyName: "bookings_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["user_id"];
          },
        ];
      };
      profiles: {
        Row: {
          bio: string | null;
          birth_date: string | null;
          created_at: string;
          first_name: string;
          last_name: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          bio?: string | null;
          birth_date?: string | null;
          created_at?: string;
          first_name: string;
          last_name: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          bio?: string | null;
          birth_date?: string | null;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      reviews: {
        Row: {
          comment: string;
          rating: number;
          review_date: string;
          review_id: number;
          turf_id: number;
          user_id: string;
        };
        Insert: {
          comment: string;
          rating: number;
          review_date: string;
          review_id?: number;
          turf_id: number;
          user_id: string;
        };
        Update: {
          comment?: string;
          rating?: number;
          review_date?: string;
          review_id?: number;
          turf_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_turf_id_fkey";
            columns: ["turf_id"];
            referencedRelation: "turfs";
            referencedColumns: ["turf_id"];
          },
          {
            foreignKeyName: "reviews_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["user_id"];
          },
        ];
      };
      turf_owner: {
        Row: {
          comapny_bio: string;
          company_address: string;
          company_name: string;
          created_at: string;
          phone_number: number;
          turf_owner_id: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          comapny_bio: string;
          company_address: string;
          company_name: string;
          created_at?: string;
          phone_number: number;
          turf_owner_id?: number;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          comapny_bio?: string;
          company_address?: string;
          company_name?: string;
          created_at?: string;
          phone_number?: number;
          turf_owner_id?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "turf_owner_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["user_id"];
          },
        ];
      };
      turfs: {
        Row: {
          capacity: number;
          contact_email: string;
          contact_phone: string;
          created_at: string;
          location: string;
          name: string;
          price: number;
          surface_type: string;
          turf_id: number;
          turf_owner_id: number;
          updated_at: string;
        };
        Insert: {
          capacity: number;
          contact_email: string;
          contact_phone: string;
          created_at?: string;
          location: string;
          name: string;
          price: number;
          surface_type: string;
          turf_id?: number;
          turf_owner_id: number;
          updated_at?: string;
        };
        Update: {
          capacity?: number;
          contact_email?: string;
          contact_phone?: string;
          created_at?: string;
          location?: string;
          name?: string;
          price?: number;
          surface_type?: string;
          turf_id?: number;
          turf_owner_id?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "turfs_turf_owner_id_fkey";
            columns: ["turf_owner_id"];
            referencedRelation: "turf_owner";
            referencedColumns: ["turf_owner_id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
