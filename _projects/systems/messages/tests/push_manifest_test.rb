require "minitest/autorun"
require "jekyll"
require "tmpdir"
require "fileutils"
require "json"

class PushManifestTest < Minitest::Test
  ROOT = File.expand_path("../../../..", __dir__)

  def test_manifest_and_worker_respect_site_baseurl
    ["", "/portfolio"].each do |baseurl|
      Dir.mktmpdir("push-manifest-") do |source|
        %w[manifest.json service-worker.js].each { |name| FileUtils.cp(File.join(ROOT, name), source) }
        site = Jekyll::Site.new(Jekyll.configuration(
          "source" => source, "destination" => File.join(source, "_site"),
          "config" => [], "plugins_dir" => [], "quiet" => true, "baseurl" => baseurl
        ))
        site.process
        manifest = JSON.parse(File.read(File.join(source, "_site/manifest.json")))
        assert_equal "#{baseurl}/dm", manifest.fetch("start_url")
        assert_equal "#{baseurl}/", manifest.fetch("scope")
        assert_equal "#{baseurl}/apple-touch-icon.png", manifest.fetch("icons").first.fetch("src")
        worker = File.read(File.join(source, "_site/service-worker.js"))
        assert_includes worker, "const BASEURL = '#{baseurl}';"
        assert_includes worker, "data.url || DM_PATH"
      end
    end
  end
end
