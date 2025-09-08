#!/usr/bin/env python3
"""
Backend API Testing for Next.js Contact Form
Tests the /api/contact endpoint functionality
"""

import requests
import json
import time
from datetime import datetime

# Base URL - testing locally since external URL returns 502
BASE_URL = "http://localhost:3000"
CONTACT_API_URL = f"{BASE_URL}/api/contact"

def log_test_result(test_name, success, details):
    """Log test results with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"[{timestamp}] {status} - {test_name}")
    print(f"Details: {details}")
    print("-" * 80)

def test_contact_api_valid_submission():
    """Test valid contact form submission"""
    test_name = "Valid Contact Form Submission"
    
    try:
        # Test data with realistic information
        test_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "message": "Hello! I'm interested in discussing a potential web development project. Could we schedule a call to discuss the requirements?"
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            response_data = response.json()
            if "message" in response_data and "successfully" in response_data["message"].lower():
                log_test_result(test_name, True, f"Status: {response.status_code}, Response: {response_data}")
                return True
            else:
                log_test_result(test_name, False, f"Unexpected response format: {response_data}")
                return False
        else:
            log_test_result(test_name, False, f"Status: {response.status_code}, Response: {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_missing_name():
    """Test contact form submission with missing name"""
    test_name = "Missing Name Field Validation"
    
    try:
        test_data = {
            "email": "test@example.com",
            "message": "This is a test message without a name field."
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            response_data = response.json()
            if "error" in response_data and "required" in response_data["error"].lower():
                log_test_result(test_name, True, f"Correctly rejected with 400: {response_data}")
                return True
            else:
                log_test_result(test_name, False, f"Wrong error message: {response_data}")
                return False
        else:
            log_test_result(test_name, False, f"Expected 400 but got {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_missing_email():
    """Test contact form submission with missing email"""
    test_name = "Missing Email Field Validation"
    
    try:
        test_data = {
            "name": "Jane Doe",
            "message": "This is a test message without an email field."
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            response_data = response.json()
            if "error" in response_data and "required" in response_data["error"].lower():
                log_test_result(test_name, True, f"Correctly rejected with 400: {response_data}")
                return True
            else:
                log_test_result(test_name, False, f"Wrong error message: {response_data}")
                return False
        else:
            log_test_result(test_name, False, f"Expected 400 but got {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_missing_message():
    """Test contact form submission with missing message"""
    test_name = "Missing Message Field Validation"
    
    try:
        test_data = {
            "name": "Bob Johnson",
            "email": "bob@example.com"
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            response_data = response.json()
            if "error" in response_data and "required" in response_data["error"].lower():
                log_test_result(test_name, True, f"Correctly rejected with 400: {response_data}")
                return True
            else:
                log_test_result(test_name, False, f"Wrong error message: {response_data}")
                return False
        else:
            log_test_result(test_name, False, f"Expected 400 but got {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_empty_fields():
    """Test contact form submission with empty fields"""
    test_name = "Empty Fields Validation"
    
    try:
        test_data = {
            "name": "",
            "email": "",
            "message": ""
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            response_data = response.json()
            if "error" in response_data and "required" in response_data["error"].lower():
                log_test_result(test_name, True, f"Correctly rejected with 400: {response_data}")
                return True
            else:
                log_test_result(test_name, False, f"Wrong error message: {response_data}")
                return False
        else:
            log_test_result(test_name, False, f"Expected 400 but got {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_invalid_json():
    """Test contact form submission with invalid JSON"""
    test_name = "Invalid JSON Handling"
    
    try:
        response = requests.post(
            CONTACT_API_URL,
            data="invalid json data",
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        # Should return 400 or 500 for invalid JSON
        if response.status_code in [400, 500]:
            log_test_result(test_name, True, f"Correctly handled invalid JSON with status {response.status_code}")
            return True
        else:
            log_test_result(test_name, False, f"Unexpected status {response.status_code} for invalid JSON")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_contact_api_large_message():
    """Test contact form submission with very large message"""
    test_name = "Large Message Handling"
    
    try:
        # Create a large message (10KB)
        large_message = "This is a test message. " * 500
        
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": large_message
        }
        
        response = requests.post(
            CONTACT_API_URL,
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        if response.status_code == 200:
            response_data = response.json()
            log_test_result(test_name, True, f"Successfully handled large message: {response_data}")
            return True
        else:
            log_test_result(test_name, False, f"Failed to handle large message: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def test_api_endpoint_availability():
    """Test if the API endpoint is accessible"""
    test_name = "API Endpoint Availability"
    
    try:
        # Test with OPTIONS request to check if endpoint exists
        response = requests.options(CONTACT_API_URL, timeout=10)
        
        # Next.js API routes typically return 405 for unsupported methods
        if response.status_code in [200, 405]:
            log_test_result(test_name, True, f"API endpoint is accessible (status: {response.status_code})")
            return True
        else:
            log_test_result(test_name, False, f"API endpoint not accessible: {response.status_code}")
            return False
            
    except Exception as e:
        log_test_result(test_name, False, f"Exception occurred: {str(e)}")
        return False

def run_all_tests():
    """Run all contact API tests"""
    print("=" * 80)
    print("STARTING NEXT.JS CONTACT API TESTS")
    print(f"Base URL: {BASE_URL}")
    print(f"Contact API URL: {CONTACT_API_URL}")
    print("=" * 80)
    
    tests = [
        test_api_endpoint_availability,
        test_contact_api_valid_submission,
        test_contact_api_missing_name,
        test_contact_api_missing_email,
        test_contact_api_missing_message,
        test_contact_api_empty_fields,
        test_contact_api_invalid_json,
        test_contact_api_large_message
    ]
    
    results = []
    for test_func in tests:
        try:
            result = test_func()
            results.append(result)
            time.sleep(1)  # Small delay between tests
        except Exception as e:
            print(f"Error running {test_func.__name__}: {e}")
            results.append(False)
    
    # Summary
    print("=" * 80)
    print("TEST SUMMARY")
    print("=" * 80)
    passed = sum(results)
    total = len(results)
    print(f"Tests Passed: {passed}/{total}")
    print(f"Success Rate: {(passed/total)*100:.1f}%")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED! Contact API is working correctly.")
    else:
        print("⚠️  Some tests failed. Please check the details above.")
    
    return passed, total

if __name__ == "__main__":
    run_all_tests()