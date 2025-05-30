.PHONY: help append init up dev down exec restart build rebuild test logs ps stop start import-data reboot rebuild port bash exec run deploy latest simon sh test

# Helper function to get the service parameter
get_service = $(if $(service),$(service),$(if $(s),$(s),$(error "Error: No service specified. Use 'service' or 's' parameter.")))

# Helper function to optionally get the service parameter
get_service_optional = $(if $(service),$(service),$(if $(s),$(s),$(info "Warning: No service specified.")))

# Helper function to get the command parameter
get_cmd = $(if $(cmd),$(cmd),$(if $(c),$(c),$(error "Error: No command specified. Use 'cmd' or 'c' parameter.")))

# Helper function to optionally get the tag parameter
get_tag = $(if $(tag),$(tag),$(if $(t),$(t),'latest'))

# Helper function to optionally get the type parameter
get_type = $(if $(type),$(type),$(if $(T),$(T),'base'))

get_ha_proxy_file = $(if $(hap), $(hap), $(if $(H),$(H), 'haproxy_prod.cfg'))

get_ha_proxy_file_optional = $(if $(hap), $(hap), 'haproxy_prod.cfg')
