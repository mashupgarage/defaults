# Rubocop

## Notes

- Make sure that TargetRubyVersion is the latest Ruby version.
- Performance cops have been removed in Rubocop 0.68. To use them, require rubocop-performance and add rubocop-performance to your gemfile.
- You don't need rubocop-rspec if your project is using minitest.
- Try to fix all the issues reported in the .rubocop_todo.yml file. Treat it as a proper TODO and not a hack to avoid rubocop warnings or errors.
