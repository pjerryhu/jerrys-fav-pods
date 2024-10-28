export type Database = {
  public: {
    Tables: {
      // Define your table types here
      your_table: {
        Row: {
          id: string;
          created_at: string;
          // ... other columns
        };
        Insert: {
          // ... insert type
        };
        Update: {
          // ... update type
        };
      };
    };
  };
};
