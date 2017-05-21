require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_index_url
    assert_response :success
  end

  test "should get param:text" do
    get dashboard_param:text_url
    assert_response :success
  end

end
