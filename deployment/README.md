# Prerequisites
`ansible.community.crypto` must be installed:

```bash
$ ansible-galaxy collection install community.crypto
```

# Run
Run playbook with vault password (required for vaulted host_vars and SSL key files): 

```bash
$ ansible-playbook playbook.yml -i inventory --ask-vault-pass
``