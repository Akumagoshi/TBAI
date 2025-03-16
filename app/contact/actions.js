// Comment out 'use server' for static export
// 'use server';

import { createClient } from '@supabase/supabase-js';
// Remove revalidatePath for static export
// import { revalidatePath } from 'next/cache';

// Initialize Supabase client with server-side credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitContactForm(formData) {
  try {
    // Parse form data
    const name = formData.get('name');
    const email = formData.get('email');
    const businessName = formData.get('businessName') || '';
    const message = formData.get('message');
    
    // Validate required fields
    if (!name || !email || !message) {
      return { 
        success: false, 
        error: 'Please fill in all required fields.'
      };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { 
        success: false, 
        error: 'Please enter a valid email address.'
      };
    }
    
    // Create a schema if it doesn't exist
    const { error: schemaError } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1);
      
    if (schemaError) {
      // If the table doesn't exist, attempt to create it
      const { error: createTableError } = await supabase.rpc('create_contact_table');
      
      if (createTableError) {
        console.error('Error creating table:', createTableError);
        return { 
          success: false, 
          error: 'Database error. Please try again later.'
        };
      }
    }
    
    // Submit to Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          business_name: businessName,
          message
        }
      ]);
    
    if (error) {
      console.error('Supabase insertion error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to submit form. Please try again later.' 
      };
    }
    
    // Remove revalidatePath for static export
    // revalidatePath('/contact');
    
    return { 
      success: true 
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
}
